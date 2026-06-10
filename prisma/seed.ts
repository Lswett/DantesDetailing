import { PrismaClient } from "@prisma/client";
import { galleryImages, memberships, services, testimonials } from "../lib/site-data";

const prisma = new PrismaClient();

async function main() {
  for (const service of services) {
    const created = await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: service.name,
        description: service.description,
        startingAt: service.startingAt,
        duration: service.duration,
        image: service.image,
        includes: service.includes.join("|"),
      },
      create: {
        slug: service.slug,
        name: service.name,
        description: service.description,
        startingAt: service.startingAt,
        duration: service.duration,
        image: service.image,
        includes: service.includes.join("|"),
      },
    });

    await prisma.pricingOption.upsert({
      where: { id: `${service.slug}-starting` },
      update: {},
      create: {
        id: `${service.slug}-starting`,
        serviceId: created.id,
        label: `${service.name} Starter`,
        startingAt: service.startingAt,
        description: "Starting price for standard-size vehicles in typical condition.",
      },
    });
  }

  for (const plan of memberships) {
    await prisma.membershipPlan.upsert({
      where: { slug: plan.slug },
      update: {
        name: plan.name,
        description: plan.description,
        startingAt: plan.startingAt,
        interval: plan.interval,
        includes: plan.includes.join("|"),
      },
      create: {
        slug: plan.slug,
        name: plan.name,
        description: plan.description,
        startingAt: plan.startingAt,
        interval: plan.interval,
        includes: plan.includes.join("|"),
      },
    });
  }

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.name.toLowerCase().replace(/[^a-z0-9]/g, "-") },
      update: testimonial,
      create: {
        id: testimonial.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        ...testimonial,
      },
    });
  }

  for (const image of galleryImages) {
    await prisma.galleryImage.upsert({
      where: { id: image.title.toLowerCase().replace(/[^a-z0-9]/g, "-") },
      update: image,
      create: {
        id: image.title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        ...image,
      },
    });
  }

  await prisma.adminUser.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? "owner@dantesdetailing.com" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL ?? "owner@dantesdetailing.com",
      passwordHash: "placeholder-change-before-auth",
      role: "owner",
    },
  });
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
