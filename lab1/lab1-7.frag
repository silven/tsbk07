#version 150

out vec4 out_Color;
in vec3 v_Color;
in vec3 v_transformedNormal;

void main(void)
{
	const vec3 light = vec3(0.58, 0.58, 0.58);
	float shade = dot(normalize(v_transformedNormal), light);
	out_Color = vec4(v_Color*shade, 1.0);
	//out_Color = vec4(shade, shade, shade, 1.0);
}
