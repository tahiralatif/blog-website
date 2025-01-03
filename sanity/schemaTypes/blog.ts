export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'correctTitle',
            type: 'string',
            title: 'Correctly defined title',
            description: 'Define the title of your blog article in a correct way',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug of your blog article',
            options: {
                source: 'title',
            },
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    title: 'Content Image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    type: 'reference',  // Reference to a link schema type
                    name: 'link',
                    to: [{ type: 'url' }],
                    title: 'Link',
                    description: 'Add a hyperlink within the content',
                },
                {
                    type: 'object',  // Object to handle the video field
                    name: 'video',
                    fields: [
                        {
                            name: 'url',
                            type: 'url',
                            title: 'Content Video URL',
                            description: 'Embed a YouTube or Vimeo link',
                        },
                    ],

                    
                },
            ],
        },
    ],


    
};


