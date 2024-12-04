const request = require('supertest');
const app = require('../src/app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

beforeAll(async () => {
  // setup before
});

afterAll(async () => {
  // Clean up
  await prisma.$disconnect();
});

describe('GET /user', () => {
  it('debe mostar todos los usuarios', async () => {
  })
});

describe('GET /user/:id', () => {
  it('debe mostrar un usuario con la misma ID', async () => {
  })
});

