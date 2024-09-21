import TeaPageRating from '@/app/components/tea-page/TeaPageDescription/TeaPageDescription';
import TeaPageHeader from '@/app/components/tea-page/TeaPageHeader/TeaPageHeader';
import TeaPageNotes from '@/app/components/tea-page/TeaPageNotes/TeaPageNotes';
import TeaPageDescription from '@/app/components/tea-page/TeaPageRating/TeaPageDescription';
import TimerButton from '@/app/components/tea-page/TimerButton/TimerButton';
import { NextPage } from 'next';

interface TeaPageProps {
    params: {
        id: number;
    };
}

const TeaPage: NextPage<TeaPageProps> = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <TeaPageHeader/>
            <TeaPageDescription/>
            <TeaPageRating/>
            <TeaPageNotes/>
            <TimerButton/>
        </div>
    );
};

export default TeaPage;
