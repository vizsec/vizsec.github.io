JADE_SOURCE = $(shell find ./source/*.jade)
HTML = $(JADE_SOURCE:.jade=.html)
CSSDIR = ./source/assets/css
JSDIR = ./source/assets/js

DEPLOY = ./deploy

JADE = ./node_modules/.bin/jade
RECESS = ./node_modules/.bin/recess
UGLIFY = ./node_modules/.bin/uglifyjs

all: $(HTML) css js

%.html: %.jade
	@echo '==> Building HTML file $<'
	$(JADE) < $< > $(DEPLOY)/$(@F)
	@echo

css:
	@echo '==> Building CSS files'
	cat $(CSSDIR)/bootstrap.css $(CSSDIR)/bootstrap-responsive.css $(CSSDIR)/app.css > $(CSSDIR)/style-tmp.css
	$(RECESS) --compile $(CSSDIR)/style-tmp.css > $(CSSDIR)/style.css
	$(RECESS) --compress $(CSSDIR)/style.css > $(DEPLOY)/css/style.min.css
	rm $(CSSDIR)/style-tmp.css $(CSSDIR)/style.css
	@echo
	
js:
	@echo '==> Building JavaScript files'
	$(UGLIFY) $(JSDIR)/bootstrap.js > $(DEPLOY)/js/bootstrap.min.js
	@echo
	
clean:
	rm -f $(HTML)

.PHONY: clean
