# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

subject = Subject.create([
    { 
        name: 'Matemáticas V',
        image_url: '',
        description: 'Análisis de fracciones e introducción a la geometría'
    },
    { 
        name: 'Matemáticas VI',
        image_url: '',
        description: 'Geometría moderna e intrducción a las ecuaciones'
    },
    {
        name: 'Biología II',
        image_url: '',
        description: 'Introducción a la histología y los seres vivos'
    },
])

session = Session.create([
    {
        title: 'Suma de fracciones',
        description: 'Analizaremos métodos aritméticos para la suma de fracciones',
        score: 5,
        subject_id: Subject.find(id=1).id
    },
    {
        title: 'Ciclo de la vida',
        description: 'Veremos como los distintos seres vivos se relacionan entre sí y logran crear un ciclo entre ellos',
        score: 4,
        subject_id: Subject.find(id=3).id
    },
])