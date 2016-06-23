---
title: "Material e Contrução: orçamentos e conteúdos"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#5e616c"
  overlay_image: material-contrucao-cover.png
  cta_label: "Veja nossas dicas"
  cta_url: "/_posts/"
  caption:
excerpt: "Material e Construção é um site voltado para pessoas que constroem e precisam de respostas simples, rápidas e GRÁTIS para pequenos orçamentos."
feature_row:
  - image_path: fudacao.png
    alt: "Orçamento de Alicerce"
    title: "Orçamento de Alicerce"
    excerpt: "Orçamento para auxiliar na hora de calcular quanto custará para fazer o seu alicerce"
    url: "/docs/configuration/"
    btn_label: "Saiba mais"
  - image_path: parede-tijolo.png
    alt: "Orçamento de parede de tijolo"
    title: "Orçamento de parede de tijolo"
    excerpt: "Quer saber quanto custa para fazer sua parede de tijolo? Veja GRÁTIS neste mini orçamento"
    url: "/docs/layouts/"
    btn_label: "Saiba mais"
  - image_path: reboco.png
    alt: "Orçamento de reboco"
    title: "Orçamento de reboco"
    excerpt: "Orçamento para auxiliar na hora de calcular quanto custará para fazer o reboco da sua parede"
    url: "/docs/license/"
    btn_label: "Saiba mais"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
