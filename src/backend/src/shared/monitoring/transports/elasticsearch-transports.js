const elasticsearch = require('winston-elasticsearch')
const httpsAwsEs = require('http-aws-es')
const aws = require('aws-sdk')


const options = {
    host: process.env.ELASTICSEARCH_HOST,
    port: process.env.ELASTICSEARCH_PORT,
    protocol: 'https',
    connectionClass: httpsAwsEs,
    awsConfig: new aws.Config({
        credentials: new aws.Credentials(
            process.env.ACESS_KEY_ID,
            process.env.SECRET_ACCESS_KEY,
        ),
        region: process.env.REGION,
    })
}

const es = require('elasticsearch').Client(options)


const pjson = require('../../../../package.json')


const getElasticsearchTransport = ( ) =>{
    new elasticsearch.ElasticsearchTransport({
        client: es,
        level: 'info',
        index: pjson.name
    })
}

module.exports = getElasticsearchTransport