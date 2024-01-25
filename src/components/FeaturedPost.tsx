/**
* 📄FileName   : FeaturedPostCard.tsx
* ⏱CreateDate : 2024/01/24 15:33:43
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 博文卡片组件(用于显示博文概述)
*/

import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from '@mui/material';

export interface IFeaturedPostCardProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

export function FeaturedPost(props: IFeaturedPostCardProps) {
    const mockPosts = [
        {
            title: 'Featured post',
            date: 'Nov 12',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random?wallpapers',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random?wallpapers',
            imageLabel: 'Image Text',
        },
    ];
    const { post } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#f44336' }} aria-label="recipe">
                        R
                    </Avatar>
                }

                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>

        </Card>
    );
}
