JADE_SOURCE = $(shell find ./src/*.jade)
HTML = $(JADE_SOURCE:.jade=.html)
DEPLOY = ./deploy
JADE = ./node_modules/jade/bin/jade

all: $(HTML)

%.html: %.jade
	$(JADE) < $< > $(DEPLOY)/$(@F)

clean:
	rm -f $(HTML)

.PHONY: clean
