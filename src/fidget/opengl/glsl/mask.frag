#version 410

in vec2 pos;
in vec2 uv;
in vec4 color;

uniform sampler2D atlasTex;

out float fragColor;

void main() {
  fragColor = (texture(atlasTex, uv).rgba * color).a;
}
