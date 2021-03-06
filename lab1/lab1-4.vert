#version 150

in vec3 in_Position;
in vec3 in_Color;

uniform mat4 myMatrix;
out vec3 v_Color;

void main(void)
{
	gl_Position = vec4(in_Position, 1.0) * myMatrix;
	v_Color =  in_Color;
}
