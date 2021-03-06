#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(set = 0, binding = 0) uniform CameraBufferObject {
    mat4 view;
    mat4 proj;
} camera;

// TODO: Declare fragment shader inputs
layout(location = 0) in vec4 pos;
layout(location = 1) in vec4 nor;
layout(location = 2) in vec2 uv;

layout(location = 0) out vec4 outColor;

void main() {
    // TODO: Compute fragment color
    outColor = mix(vec4(68.0 / 255.0, 87.0 / 255.0, 41.0 / 255.0, 1.0), vec4(110.0 / 255.0, 140.0 / 255.0, 46.0 / 255.0, 1.0), uv.y);
}