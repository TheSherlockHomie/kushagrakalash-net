+++
title = "Hello, world"
date = 2026-05-19T00:00:00+05:30
draft = true
description = "A draft post with sample Markdown content."
slug = "hello-world"
tags = ["hugo", "notes"]
+++

This is a draft post with sample content for checking typography and layout.

## Headings

### A smaller heading

Text should stay readable. Lines should not be too long, and the page should work without JavaScript.

## Links and Emphasis

Here is [a link to Hugo](https://gohugo.io/). Here is `inline code`.

You can use **bold text**, *italic text*, and ~~strikethrough~~.

## Lists

- Plain unordered item
- Another item
- A final item with `code`

1. First ordered item
2. Second ordered item
3. Third ordered item

## Quote

> The best default is usually the one that stays out of the reader's way.

## Code

```go
package main

import "fmt"

func main() {
	fmt.Println("hello, hugo")
}
```

Long lines in code blocks should scroll instead of breaking the page:

```text
this-is-a-long-line-used-to-check-horizontal-scrolling-in-code-blocks-without-making-the-whole-page-too-wide
```

## Table

| Thing | Purpose |
| --- | --- |
| Markdown | Content |
| Hugo templates | HTML structure |
| CSS | Readability |

## Image

![Simple sample image](/images/sample.svg)

## Figure Shortcode

{{< figure src="/images/sample.svg" alt="Simple sample image in a figure" caption="A small static sample image." >}}

## Footnote

Here is a sentence with a footnote.[^1]

[^1]: This is a sample footnote.
