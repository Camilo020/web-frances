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
        id: 'laura',
        quote:
            'Siempre agradeceré que en mi camino se haya cruzado una profesora como tú, llena de vocación y amor por lo que hace; eso siempre fue evidente en todas nuestras clases. Estas siempre estuvieron llenas de aprendizajes y risas, cosas que valoro mucho como estudiante, ya que aprender un idioma desde cero no es nada fácil, pero de la mano de un buen docente, junto a su constante acompañamiento, lo hace más ameno y sencillo. Dicen que el amor por el idioma se adquiere por el camino y estoy totalmente de acuerdo, aún más de lado de buenos docentes que tienen el amor por enseñar, la empatía por entender a sus estudiantes y el conocimiento para transmitir. He de decir que muchas de mis mejores clases fueron contigo; tu dulzura te caracteriza y hace que nosotros, como estudiantes, nos sintamos acogidos, acompañados, escuchados y, más que todo, con ganas y ánimo de seguir aprendiendo el idioma.',
        studentName: 'Laura Montoya',
        location: 'Bogotá',
        context: 'Francés A1-B2 + Preparación DALF C1',
        initials: 'LM',
    },
    {
        id: 'silvia',
        quote:
            'Personalmente, me gustaban mucho las clases, ya que además de ver los temas estipulados en el libro y obligatorios de cada clase, nos dabas tips y aprendíamos de forma dinámica muchas cosas más. Igualmente, estaba esa cercanía y humanidad que tienes con tus estudiantes; entonces, eso facilita el aprendizaje y vuelve las clases más amenas 🫶🏻.',
        studentName: 'Silvia Martinez',
        location: 'Medellín',
        context: 'Francés A2- B2 + Preparación DALF C1',
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
