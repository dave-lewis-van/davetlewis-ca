# Infrastructure

## AWS Resources

| Resource | ID / ARN |
|----------|----------|
| S3 bucket | `davetlewis.ca` (us-west-2) |
| CloudFront distribution | `E3WMRZHIEVBKX` (`d1skgwzmhvjrud.cloudfront.net`) |
| ACM certificate | `arn:aws:acm:us-east-1:095634694923:certificate/0ab144a7-79a7-48a0-84af-5825b4d336f7` |
| Route 53 hosted zone | `Z04108992THCPY2P7YMKW` |

## DNS

Both `davetlewis.ca` and `www.davetlewis.ca` are Route 53 alias records pointing to the CloudFront distribution.

## Deployment

Push to `main` (or manual `workflow_dispatch`) triggers `.github/workflows/deploy.yml`:
1. Build Astro → `dist/`
2. `aws s3 sync dist/ s3://davetlewis.ca --delete`
3. `aws cloudfront create-invalidation --distribution-id E3WMRZHIEVBKX --paths "/*"`

Required GitHub secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`

## Certificate renewal

The ACM certificate auto-renews via DNS validation (CNAME records are permanently in Route 53). No manual action needed.
