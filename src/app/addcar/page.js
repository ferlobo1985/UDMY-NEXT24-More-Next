import { Input, Button} from '@nextui-org/react';
import { connectToDatabase } from '@/lib/mongo_db'


export default function AddCarPage(){


    async function onSubmit(formdata){
        'use server'
        const {db} = await connectToDatabase();

        await db.collection("models")
        .insertOne({
            model: formdata.get('model'),
            type: formdata.get('type')
        })
    }


    return(
        <div>
            <form className='bg-white shadow-md rounded p-8 mb-4 mt-4'
                action={onSubmit}
            >
                <div className='mb-4'>
                    <Input type='string' label="Model" name="model"/>
                </div>
                <div className='mb-4'>
                    <Input type='string' label="Type" name="type"/>
                </div>
                <Button color='primary' type='submit'>
                    Button
                </Button>
            </form>
        </div>
    )
}