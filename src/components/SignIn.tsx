

export interface ISignInProps {
}

export function SignIn(props: ISignInProps) {

    const handleSubmit = (values: any) => {
        console.log(values, typeof values);
    };

    return (
        // <Form onFinish={values => handleSubmit(values)}
        //     style={{ width: 400 }}>
        //     <Form.Item
        //         name="username"
        //         label='PhoneNumber'
        //         style={{ width: '100%' }}>
        //         <Input placeholder="Username" />
        //     </Form.Item>
        //     <Form.Item
        //         name="password"
        //         label='Password'
        //         style={{ width: '100%' }}>
        //         <Input
        //             type="password"
        //             placeholder="Password"
        //         />
        //     </Form.Item>
        //     <Form.Item name="remember" valuePropName="checked" noStyle>
        //         <Checkbox>Remember me</Checkbox>
        //     </Form.Item>

        //     <a className="login-form-forgot" href="">
        //         Forgot password
        //     </a>
        //     <div style={{ textAlign: 'center' }}>
        //         <Button
        //             htmlType='submit'
        //             type="primary"
        //             style={{ width: 350, borderRadius: 16 }}>
        //             Sign In
        //         </Button>
        //     </div>
        //     <div style={{ margin: '0 auto', width: '90%' }}>
        //         <Divider>
        //             Or
        //         </Divider>
        //     </div>
        //     {/* TODO: 第三方登录 */}
        //     {/* {({ formState, values, formApi }) => (
        //         <>
        //             内部获取values时，使用此方式
        //         </>
        //     )} */}
        // </Form>
        <>登录</>
    );
}
