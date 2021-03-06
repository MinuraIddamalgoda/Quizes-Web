// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_cognito_identity_pool_id': 'ap-southeast-2:14e1dc2e-31f1-4cac-84c8-74f5bbb782c5',
    'aws_cognito_region': 'ap-southeast-2',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'quizesios-hosting-mobilehub-70694695',
    'aws_content_delivery_bucket_region': 'ap-southeast-2',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'drio1ru6308oa.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'ap-southeast-2',
    'aws_dynamodb_table_schemas': [{"tableName":"quizesios-mobilehub-70694695-Questions","attributes":[{"name":"userId","type":"S"},{"name":"qDateAdded","type":"N"},{"name":"qAnswer","type":"BOOL"},{"name":"qId","type":"S"},{"name":"qImage","type":"S"},{"name":"qText","type":"S"}],"indexes":[{"indexName":"userId-qDateAdded","hashKey":"userId","rangeKey":"qDateAdded"}],"region":"ap-southeast-2","hashKey":"userId","rangeKey":"qDateAdded"}],
    'aws_mobile_analytics_app_id': 'c1aca3f377ce4ce190b49be73c67f692',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': '09d34b43-3fe4-4b46-9e78-23466af80dba',
    'aws_project_name': 'Quizes-iOS',
    'aws_project_region': 'ap-southeast-2',
    'aws_resource_name_prefix': 'quizesios-mobilehub-70694695',
}

export default awsmobile;
