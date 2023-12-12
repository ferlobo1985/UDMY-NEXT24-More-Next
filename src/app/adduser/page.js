import { Input, Button} from '@nextui-org/react';
import DBconnect from '@/lib/mongoose';
import User from '@/lib/user_model';

export default function AddUserPage(){

    async function onSubmit(formdata){
        'use server'
        await DBconnect()

        await User.create({
            email: formdata.get('email'),
            password: formdata.get('password')
        })
    }


    return(
        <div>
            <form className='bg-white shadow-md rounded p-8 mb-4 mt-4'
                action={onSubmit}
            >
                <div className='mb-4'>
                    <Input type='email' label="Email" name="email"/>
                </div>
                <div className='mb-4'>
                    <Input type='password' label="Password" name="password"/>
                </div>
                <Button color='primary' type='submit'>
                    Button
                </Button>
            </form>
        </div>
    )
}