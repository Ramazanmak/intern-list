import file from "./internList.json" with { type: "json" };
console.log(file[0]);


const names=[
    "Максютов Рамазан Ирекович",
    "Гринюк Михаил Александрович",
    "Васильева Алла Николаевна",
    "Шмидт Юлия Евгеньевна",
    "Алиев Азим Маратович",
    "Колесникова Анастасия Михайловна",
    "Пронько Олег Васильевич",
    "Сарафанова Екатерина Алексеевна",
    "Александров Иван Александрович",
    "Корепанова Ольга Назаровна"
]

const directions=[
    'Frontend',
    'Backend',
    'Machine Learning',
    'Fullstack'
]

const mainSkills = {
    'Frontend':['JavaScript','HTML','CSS','Vue.js'],
    'Backend':['Python','C++','Django','Docker'],
    'Machine Learning':['Python','numpy','pandas','statistics'],
    'Fullstack':['Java','Spring','JavaScript','CSS','HTML']
}

const mainAbout = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nemo incidunt molestias eos magni atque, recusandae dicta sunt sed praesentium voluptates facere officia ea, et expedita omnis. Unde tempore, modi eveniet dolore sapiente necessitatibus nesciunt voluptate corporis explicabo veniam. Vitae optio dolor, fugit ducimus sed aspernatur nemo, facilis nulla quidem beatae, expedita mollitia esse aliquid odit. Vel possimus mollitia nobis laborum nesciunt! Magni iusto quidem praesentium deleniti rem eum inventore quod sequi quos enim qui, cupiditate dolore facilis excepturi repellendus! Quis, maxime atque. Impedit corrupti beatae inventore eveniet quas sint voluptates earum quasi, atque possimus eligendi sapiente illo neque asperiores!'

const edu = [
    [
        {
            
        }
    ]
]

const internList = names.reduce((acc, item, index)=>{
    const res = {}
    res.id = index+1;
    res.name = item;
    res.direction = directions[index % directions.length];
    res.skills = mainSkills[res.direction];
    res.about = mainAbout;
    
    return [...acc, res]
},[])

// let a = JSON.stringify(internList,null,4);
// console.log(a)

