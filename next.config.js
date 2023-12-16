/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'picsum.photos'
            }
        ]
    }
}

module.exports = nextConfig
