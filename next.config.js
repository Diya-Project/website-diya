/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'sharingvision.com',
                pathname:'**'
            },
            {
                protocol:'https',
                hostname:'asaba.co.id',
                pathname:'**'
            },{
                protocol:'https',
                hostname:'mdev.co.id',
                pathname:'**'
            }
        ]
    }
}

module.exports = nextConfig
