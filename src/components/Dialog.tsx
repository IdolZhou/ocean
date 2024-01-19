import { Modal, TabPane, Tabs } from '@douyinfe/semi-ui';
import { SignIn } from '@components/SignIn';
import { SignUp } from '@components/SignUp';
import { useDialogStore } from '@stores/dialog';

export interface IDialogProps {
}

export function Dialog(props: IDialogProps) {
    // 从Store中获取状态值
    const visible = useDialogStore((state) => state.visible);
    const setVisible = useDialogStore((state) => state.setVisible);

    const showDialog = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
    };
    return (
        <Modal title='Welcome to Ocean'
            style={{ justifyContent: 'center' }}
            visible={visible}
            onOk={handleOk}
            afterClose={handleAfterClose}
            onCancel={handleCancel}
            closeOnEsc={true}
            footer={null}>
            <Tabs type='line'>
                <TabPane tab='Sign In' itemKey='0'>
                    <SignIn></SignIn>
                </TabPane>
                <TabPane tab='Sign Up' itemKey='1'>
                    <SignUp></SignUp>
                </TabPane>
            </Tabs>
        </Modal>
    );
}
