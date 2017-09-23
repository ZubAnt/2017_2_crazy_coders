import Table from '../../components/Table/Table'


let data = {
    classTable: 'about_table',
    title: 'DEVELOPERS',
    users: [
        {
            name: 'GRIGOREV PAVEL',
            position: 'FRONTEND',

        },
        {
            name: 'SAMOKHIN MAXIM',
            position: 'FRONTEND',

        },
        {
            name: 'ZUBAREV ANTON',
            position: 'BACKEND',

        },
        {
            name: 'PITIK DIMA',
            position: 'BACKEND',

        },
    ]
};


export default function createAboutUs() {
    return new Table('section', {id: 'about-page'}, [], {data});
}