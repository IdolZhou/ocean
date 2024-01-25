/**
* 📄FileName   : CommentField.tsx
* ⏱CreateDate : 2024/01/24 11:13:04
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 评论编辑组件（需要授权）
*/

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
} from '@mui/material';
import { t } from 'i18next';

export function CommentField() {

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                title="UserName"
            />
            <CardContent>
                <TextField
                    id="outlined-textarea"
                    placeholder="文明发言，拒绝灌水"
                    multiline
                    fullWidth
                />
            </CardContent>
            <CardActions disableSpacing sx={{ px: 2, pt: 0 }}>
                <Button style={{ marginLeft: 'auto' }}>
                    {t("Comment.Cancel")}
                </Button>
                <Button variant="contained" sx={{ ml: 2 }}>
                    {t("Comment.Comment")}
                </Button>

            </CardActions>
        </Card>
    );
}
