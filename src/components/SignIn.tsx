import { Button, Divider, Form } from '@douyinfe/semi-ui';
import { IconUser, IconLock } from '@douyinfe/semi-icons';

export interface ISignInProps {
}

export function SignIn(props: ISignInProps) {

    const handleSubmit = (values: any) => {
        console.log(values, typeof values);
    };

    return (
        <Form onSubmit={values => handleSubmit(values)}
            style={{ width: 400 }}>
            <Form.Input
                field='phone'
                label='PhoneNumber'
                style={{ width: '100%' }}
                prefix={<IconUser />}
                showClear
                placeholder='Enter your phone number'>

            </Form.Input>
            <Form.Input
                field='password'
                label='Password'
                style={{ width: '100%' }}
                prefix={<IconLock />}
                mode='password'
                placeholder='Enter your password'>

            </Form.Input>
            <Form.Checkbox
                field='agree'
                noLabel>
                RememberMe
            </Form.Checkbox>
            <div style={{ textAlign: 'center' }}>
                <Button
                    htmlType='submit'
                    type="primary"
                    style={{ width: 350, borderRadius: 16 }}>
                    Sign In
                </Button>
            </div>
            <div style={{ margin: '0 auto', width: '90%' }}>
                <Divider margin={30} align='center' >
                    Or
                </Divider>
            </div>
            {/* TODO: 第三方登录 */}
            {/* {({ formState, values, formApi }) => (
                <>
                    内部获取values时，使用此方式
                </>
            )} */}
        </Form>
    );
}
