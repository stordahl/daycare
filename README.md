
# Daycare

Daycare is an iteractive CLI tool that generates the boilerplate for a WordPress Child theme.

## Getting Started

To use daycare navigate to wp-content/themes in your terminal, create a directory for your child theme, change into that new directory.

Then simply run `npx daycare`

```shell
mkdir mytheme-child && cd mytheme-child
npx daycare
```

## Roadmap / Current Issues

- [ ] Need to detect how parent theme is enquing styles | *Current Work Around*: generate functions.php with both snippets, with one commented out
- [ ] Add in CSS reset import options
- [ ] Add in Gulp config generation

