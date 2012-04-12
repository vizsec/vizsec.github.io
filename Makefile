JADE = $(shell find templates/*.jade)
HTML = $(JADE:.jade=.html)

all: $(HTML)

%.html: %.jade
	./node_modules/jade/bin/jade < $< > ./$(@F)

clean:
	rm -f $(HTML)

.PHONY: clean
