import TeaPageHeader from '@/app/components/tea-page/TeaPageHeader/TeaPageHeader';
import TeaPageNotes from '@/app/components/tea-page/TeaPageNotes/TeaPageNotes';
import TeaPageDescription from '@/app/components/tea-page/TeaPageDescription/TeaPageDescription';
import TimerButton from '@/app/components/tea-page/TimerButton/TimerButton';
import { NextPage } from 'next';
import TeaPageRating from '@/app/components/tea-page/TeaPageRating/TeaPageRating';

const products = [
    { id: 3, name: 'Те Гуань Инь', variety: 'Улуны' },
];

interface TeaPageProps {
    params: {
        id: number;
    };
}

const TeaPage: NextPage<TeaPageProps> = ({ params }) => {
    console.log(params)
    const tea = products.find(i => i.id === +params.id);
console.log(tea)
    return (
        <div>
            {tea ? (
                <TeaPageHeader tea={tea} />
            ) : (
                <p>Чай не найден</p>
            )}
            <TeaPageDescription description="Один из самых ярких и запоминающихся светлых улунов. Свое название чай получил в честь божества Гуаньинь. (кит. 鐵觀音, пиньинь tiěguānyīn, дословно «Железная богиня Милосердия»). Произрастают они в провинции Фуцзянь на юге Китая. История этого чая начинается со времен правления династии Тан."/>
            <TeaPageRating rating={4}/>
            <TeaPageNotes notes={[]}/>
            <TimerButton id={params.id}/>
        </div>
    );
};

export default TeaPage;