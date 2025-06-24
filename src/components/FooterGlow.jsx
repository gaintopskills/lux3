import { useEffect, useRef } from 'react';

const FooterGlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fragmentShaderSource = `#version 300 es
    precision highp float;
    uniform float time;
    uniform vec2 vp;
    in vec2 uv;
    out vec4 fragColor;

    float rand(vec2 p) {
      return fract(sin(dot(p.xy, vec2(1., 300.))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = rand(i);
      float b = rand(i + vec2(1.0, 0.0));
      float c = rand(i + vec2(0.0, 1.0));
      float d = rand(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    #define OCTAVES 5
    float fbm(vec2 p) {
      float value = 0.;
      float amplitude = .4;
      for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(p);
        p *= 2.;
        amplitude *= .4;
      }
      return value;
    }

    void main() {
      vec2 p = uv.xy;
      p.x *= vp.x / vp.y;
      float gradient = mix(p.y * 0.6 + 0.1, p.y * 1.2 + 0.9, fbm(p));
      float speed = 0.2;
      float details = 7.;
      float force = .9;
      float shift = .5;
      vec2 fast = vec2(p.x, p.y - time * speed) * details;
      float ns_a = fbm(fast);
      float ns_b = force * fbm(fast + ns_a + time) - shift;
      float ins = fbm(vec2(ns_b, ns_a));

      vec3 darkGold1 = vec3(0.0, 0.0, 0.0);        // #000000
      vec3 darkGold2 = vec3(0.267, 0.22, 0.145);   // #443825
      vec3 darkGold3 = vec3(0.404, 0.302, 0.149);  // #674d26
      vec3 darkGold4 = vec3(0.675, 0.537, 0.333);  // #ac8955
      vec3 darkGold5 = vec3(0.902, 0.796, 0.635);  // #e6cba2

      vec3 blendedColor = mix(
        mix(darkGold1, darkGold2, ins),
        mix(darkGold3, mix(darkGold4, darkGold5, ins), ins),
        ins
      );

      fragColor = vec4(blendedColor + vec3(ins - gradient), 1.0);
    }`;

    class WebGLHandler {
      vertexShaderSource = `#version 300 es
        precision mediump float;
        const vec2 positions[6] = vec2[6](
          vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
          vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0)
        );
        out vec2 uv;
        void main() {
          uv = positions[gl_VertexID];
          gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
        }`;

      constructor(canvas, fragmentShaderSource) {
        this.cn = canvas;
        this.gl = canvas.getContext('webgl2');
        this.startTime = Date.now();

        this.resize();
        window.addEventListener('resize', () => this.resize());

        this.program = this.gl.createProgram();
        this.compileShader(this.vertexShaderSource, this.gl.VERTEX_SHADER);
        this.compileShader(fragmentShaderSource, this.gl.FRAGMENT_SHADER);
        this.gl.linkProgram(this.program);
        this.gl.useProgram(this.program);

        this.timeLocation = this.gl.getUniformLocation(this.program, 'time');
        this.resolutionLocation = this.gl.getUniformLocation(this.program, 'vp');

        this.render();
      }

      resize() {
        this.cn.width = window.innerWidth;
        this.cn.height = window.innerHeight;
        this.gl.viewport(0, 0, this.cn.width, this.cn.height);
      }

      compileShader(source, type) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
          console.error(this.gl.getShaderInfoLog(shader));
          this.gl.deleteShader(shader);
          return null;
        }
        return this.gl.attachShader(this.program, shader);
      }

      render = () => {
        this.gl.uniform1f(this.timeLocation, (Date.now() - this.startTime) / 1000);
        this.gl.uniform2fv(this.resolutionLocation, [this.cn.width, this.cn.height]);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        window.requestAnimationFrame(this.render);
      }
    }

    const canvas = canvasRef.current;
    if (canvas) new WebGLHandler(canvas, fragmentShaderSource);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -9999,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
};

export default FooterGlow;
