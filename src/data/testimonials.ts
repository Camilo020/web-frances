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
        id: 'laura-montoya',
        quote:
            'Siempre agradeceré que en mi camino se haya cruzado una profesora como tú, llena de vocación y amor por lo que hace; eso siempre fue evidente en todas nuestras clases. Estas siempre estuvieron llenas de aprendizajes y risas, cosas que valoro mucho como estudiante, ya que aprender un idioma desde cero no es nada fácil, pero de la mano de un buen docente, junto a su constante acompañamiento, lo hace más ameno y sencillo.',
        studentName: 'Laura Montoya',
        location: 'Bogotá',
        context: 'Francés A1-B2 + Preparación DALF C1',
        initials: 'LM',
    },
    {
        id: 'silvia-martinez',
        quote:
            'Personalmente, me gustaban mucho las clases, ya que además de ver los temas estipulados en el libro y obligatorios de cada clase, nos dabas tips y aprendíamos de forma dinámica muchas cosas más. Igualmente, estaba esa cercanía y humanidad que tienes con tus estudiantes; entonces, eso facilita el aprendizaje y vuelve las clases más amenas 🤚🏻.',
        studentName: 'Silvia Martinez',
        location: 'Medellín',
        context: 'Francés A2-B2 + Preparación DALF C1',
        initials: 'SM',
    },
    {
        id: 'laura-correa',
        quote:
            'Aprender francés con Paula fue una experiencia transformadora. Su paciencia y dedicación hicieron que cada clase fuera productiva y entretenida. En poco tiempo pude avanzar de B1 a B2 con total confianza.',
        studentName: 'Laura Correa',
        location: 'Bogotá',
        context: 'Francés B1-B2',
        initials: 'LC',
    },
    {
        id: 'paola-montanez',
        quote:
            'Paula tiene un don para enseñar. Su metodología clara y su empatía hacen que aprender francés sea mucho más sencillo de lo que pensaba. Recomiendo sus clases al 100%.',
        studentName: 'Paola Montañez',
        location: 'Cali',
        context: 'Francés A2-B2',
        initials: 'PM',
    },
];
