/**
* 📄FileName   : BusinessCard.tsx
* ⏱CreateDate : 2024/01/24 16:03:48
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 博文作者名片组件
*/

import {
    Avatar,
    Box,
    Button,
    Typography,

} from '@mui/material';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { t } from 'i18next';
export interface IBusinessCardProps {
}

export function BusinessCard(props: IBusinessCardProps) {
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex' }}>
                <Avatar>R</Avatar>
                <Typography sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>Title</Typography>
                <Button startIcon={<GroupAddIcon />} sx={{ ml: 'auto' }}>
                    {t('Comment.Follow')}
                </Button>

            </Box>
            <Box sx={{ py: 1 }}>
                <Typography>916 Follows</Typography>
            </Box>
            <Box sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`
            }} aria-label="expertise">
                <Typography>动态生成擅长的技能标签</Typography>
            </Box>
        </Box>

    );
}
