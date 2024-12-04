const request = require('supertest');
const app = require('../src/app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

beforeAll(async () => {
  // conexion a db?
});

afterAll(async () => {
  // Clean up 
  await prisma.$disconnect();
});

describe('POST /auth/register', () => {
  it('debe registrar un usuario nuevo correctamente', async () => {

  });

  it('debe retornar un error si falta un campoo', async () => {

  });
});

describe('POST /auth/login', () => {
  it('debe logearse exitosamente con credenciales correctas', async () => {

  });

  it('debe retornar un error con credenciales invalidas', async () => {

  });

  it('debe retornar un error si el usuario no existe', async () => {

  });
});
