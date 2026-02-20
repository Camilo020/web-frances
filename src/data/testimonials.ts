export interface Testimonial {
    id: string;
    quote: string;
    studentName: string;
    location: string;
    context: string;
    initials: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'ana',
        quote:
            'Pasé el DELF B2 en el primer intento. La metodología es clara, estructurada y muy motivadora. Nunca pensé que avanzaría tan rápido.',
        studentName: 'Ana Martínez',
        location: 'Bogotá',
        context: 'Preparación DELF B2',
        initials: 'AM',
    },
    {
        id: 'carlos',
        quote:
            'En solo 3 meses pude comunicarme con fluidez en París. Las clases son dinámicas y siempre adaptadas a lo que yo necesitaba.',
        studentName: 'Carlos Rodríguez',
        location: 'Medellín',
        context: 'Clases online · Francés para viajes',
        initials: 'CR',
    },
    {
        id: 'laura',
        quote:
            'La mejor profesora de francés que he tenido. Tiene una paciencia increíble y hace cada clase interesante y diferente.',
        studentName: 'Laura Gómez',
        location: 'Bogotá',
        context: 'Clases individuales',
        initials: 'LG',
    },
];
