# Metadata Not Removed

## Introduction

The "metadata not removed" flaw refers to a security gap where sensitive information or potentially compromising metadata are left in files, documents, or shared media inappropriately, thus exposing confidential details to unauthorized individuals.

## Description

Metadata are embedded data in a file or document that describe and provide information about it. For example, in a Word document or a PDF file, metadata might include details about the author, the creation date, previous revisions, comments, and even information such as the geographical location where the file was created.

## Risks

When these metadata contain sensitive information and are not properly removed before sharing or disseminating a file, it can pose privacy and security risks, such as:

1. **Leaks of confidential information:** Unremoved metadata could contain details about the people involved, internal comments, or precise location information.
2. **Exposure of revisions or previous versions:** Metadata can reveal previous revisions of a document, including intentionally deleted information or obsolete data.
3. **Security risks:** Some metadata could contain information about the software used to create the document, fonts, watermarks, or other technical details exploitable for targeted attacks.

## Different Types of Metadata

### HTML Metadata
- **`<head>` tag:** HTML metadata are often included in the `<head>` section of a web page's HTML code, including elements like `<title>`, `<meta>` for descriptions, keywords, etc.

### Content-Related Metadata
- **Tag metadata:** Specific tags such as `<meta>`, `<link>`, `<base>`, `<style>`, `<script>`, etc., can contain metadata related to content, style sheets, scripts, etc.

### URL Metadata
- **URLs and URL parameters:** URLs can contain information such as query parameters that can be considered metadata.

### File Metadata
- **File metadata:** Files themselves can contain metadata, like in images where they can include the device used, the time, resolution, etc.

### Link Metadata
- **Links and `<a>` tags:** `<a>` tags can contain attributes such as `title`, `rel`, etc., acting as metadata for links.

### Structural Metadata
- **Site structure:** Structured data (Schema.org, JSON-LD) embedded in the code can also be considered as metadata.

### Security Metadata
- **Security metadata:** Some metadata may concern security aspects such as SSL/TLS certificates, browser security policies, HTTP security directives, etc.

## Interesting Metadata to Showcase

### Personal Information
- **Names and identifiers:** Usernames, employee names, authors, etc.
- **Email addresses:** Exposure of email addresses can be exploited for phishing or spam campaigns.
- **Identification numbers:** Such as social security numbers, personal identification numbers, etc.

### Login Data
- **Passwords:** Any insecure storage or exposure of passwords.
- **Tokens and authentication keys:** API keys, authentication tokens, etc.

### Financial Information
- **Credit cards / banking data:** Exposure of credit card numbers or other financial information.

### Location Data
- **GPS coordinates:** Location metadata can reveal information about a person's movements and habits.

### Hardware and Software Information
- **Software versions:** Information about versions of software or services used.
- **Configuration information:** Such as specific keys or configurations that can be used to access systems.
