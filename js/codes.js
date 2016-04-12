// Generated by CoffeeScript 1.9.3
(function() {
  var add_badges, add_description, add_examples, add_fake_logo, add_header, add_logo, build_function, data_file;

  data_file = "data/codes.yaml";

  add_logo = function(selection) {
    var subselection;
    subselection = selection.filter(function(d) {
      return "logo" in d;
    });
    subselection = subselection.append("img").attr("src", function(d) {
      return d.logo;
    });
    subselection = subselection.attr("style", "margin-top: 5px;");
    return subselection.attr("alt", "").attr("class", "circle");
  };

  add_fake_logo = function(selection) {
    var subselection;
    subselection = selection.filter(function(d) {
      return !("logo" in d);
    });
    subselection = subselection.append("i").attr("class", "material-icons circle light-green lighen-1");
    subselection.attr("style", "font-size: 23px;").attr("style", "margin-top: 5px");
    return subselection.text("code");
  };

  add_header = function(selection) {
    var subselection;
    subselection = selection.filter(function(d) {
      return "name" in d;
    });
    subselection = subselection.append("span").attr("class", "title");
    subselection = subselection.append("a").attr("href", function(d) {
      return d.home_page;
    });
    subselection.attr("target", "_blank");
    return subselection.append("h5").text(function(d) {
      return d.name;
    });
  };

  add_description = function(selection) {
    var p, subselection;
    subselection = selection.filter(function(d) {
      return "description" in d;
    });
    p = subselection.append("p").text(function(d) {
      return d.description;
    });
    return p.attr("style", "font-size: 20px");
  };

  add_badges = function(selection) {
    var a, p, subselection;
    subselection = selection.filter(function(d) {
      return "badges" in d;
    });
    p = subselection.append("p").attr("style", "padding-top: 10px");
    a = p.selectAll().data(function(d) {
      return d.badges;
    }).enter().append("a");
    a = a.attr("href", function(d) {
      return d.href;
    });
    a.attr("target", "_blank");
    return a.append("img").attr("src", function(d) {
      return d.src;
    }).attr("style", "max-width: 100%; padding-right: 10px");
  };

  add_examples = function(selection) {
    var a, add_separator, p, set_size, span, span_, subselection;
    subselection = selection.filter(function(d) {
      return "examples" in d;
    });
    p = subselection.append("p");
    p.attr("style", "padding-top: 10px; font-size: 20px");
    set_size = function(d) {
      var example, i, j, len, ref;
      ref = d.examples;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        example = ref[i];
        example.last = d.examples.length - 1 === i;
      }
      return d.examples;
    };
    span = p.selectAll().data(set_size).enter().append("span");
    a = span.append("a").attr("href", function(d) {
      return d.href;
    });
    a.attr("target", "_blank");
    a.text(function(d) {
      return d.name;
    });
    add_separator = function(d, i) {
      if (d.last) {
        return "";
      } else {
        return "&nbsp;&nbsp;|&nbsp;&nbsp;";
      }
    };
    return span_ = span.append("span").html(add_separator);
  };

  build_function = function(data_text) {
    var data, selection;
    data = jsyaml.load(data_text);
    selection = d3.select("#codes").selectAll().data(data).enter().append("li").attr("class", "collection-item avatar light-green lighten-4");
    selection.attr("style", "border-color: transparent; border-bottom-style: none; margin-bottom: 5px;");
    selection = selection.sort();
    add_logo(selection);
    add_fake_logo(selection);
    add_header(selection);
    add_description(selection);
    add_badges(selection);
    return add_examples(selection);
  };

  d3.text(data_file, build_function);

}).call(this);
