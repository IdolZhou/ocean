/**
* 📄FileName   : CommentCard.tsx
* ⏱CreateDate : 2024/01/20 14:47:18
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 显示评论组件
*/

import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Link,
    Typography
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import { t } from 'i18next';

export function CommentCard() {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2023"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="favorites">
                    <ThumbUpAltIcon />
                </IconButton>
                <IconButton aria-label="comment">
                    <CommentIcon />
                </IconButton>
                <Link style={{ marginLeft: 'auto' }}
                    component="button"
                    underline="hover"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}>
                    {t("Comment.Reply")}
                </Link>
            </CardActions>
        </Card>
    );
}
