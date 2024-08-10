## Initiate and config tailwind project

### Initiate a project

```bash
  yarn init -y
```

this will add `package.json` file

### Add tailwindcss to the project

```bash
  yarn add --dev tailwindcss
```

### Config tailwindcss

```bash
  yarn tailwindcss init
```

this will add the `tailwind.config.js`

## Update tailwindcss

```diff
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic HTML Tags with CSS</title>
-   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
+   <script src="https://cdn.tailwindcss.com"></script>
  </head>
```
