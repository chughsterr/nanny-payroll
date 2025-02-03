import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import type { NannyFormData } from '@/types/nanny';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data: NannyFormData = await request.json();
    
    // Create nanny record
    const nanny = await prisma.nanny.create({
      data: {
        firstName: data.personalInfo.firstName,
        lastName: data.personalInfo.lastName,
        ssn: data.personalInfo.ssn,
        dateOfBirth: new Date(data.personalInfo.dateOfBirth),
        email: data.personalInfo.email,
        phone: data.personalInfo.phone,
        street: data.personalInfo.address.street,
        city: data.personalInfo.address.city,
        state: data.personalInfo.address.state,
        zipCode: data.personalInfo.address.zipCode,
        startDate: new Date(data.employmentInfo.startDate),
        hourlyRate: data.employmentInfo.hourlyRate,
        weeklyHours: data.employmentInfo.weeklyHours,
        payFrequency: data.employmentInfo.payFrequency.toUpperCase(),
      },
    });

    return NextResponse.json({ 
      message: 'Nanny registered successfully',
      nanny 
    });
    
  } catch (error) {
    console.error('Error registering nanny:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}