.PHONY: serve build clean new-post

serve:
	hugo server -D

build:
	hugo --minify

clean:
	rm -rf public resources/_gen

new-post:
ifndef title
	$(error usage: make new-post title="My Post Title")
endif
	@slug=$$(printf '%s' "$(title)" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$$//'); \
	hugo new content "blog/$${slug}.md"
