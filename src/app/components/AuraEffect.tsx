// "use client"

// import { useRef, useEffect } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { type ShaderMaterial, Vector2 } from "three"
// import type * as THREE from "three"

// const AuraShader = () => {
//   const meshRef = useRef<THREE.Mesh>(null)
//   const materialRef = useRef<ShaderMaterial>(null)
//   const { size } = useThree()

//   useFrame((state) => {
//     if (materialRef.current) {
//       materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
//     }
//   })

//   useEffect(() => {
//     if (materialRef.current) {
//       materialRef.current.uniforms.uResolution.value.set(size.width, size.height)
//     }
//   }, [size])

//   return (
//     <mesh ref={meshRef}>
//       <planeGeometry args={[2, 2]} />
//       <shaderMaterial
//         ref={materialRef}
//         fragmentShader={`
//           uniform float uTime;
//           uniform vec2 uResolution;
          
//           float noise(vec2 st) {
//             return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
//           }
          
//           void main() {
//             vec2 st = gl_FragCoord.xy / uResolution.xy;
//             vec2 center = vec2(0.5);
//             float d = distance(st, center);
            
//             float noise = noise(st * 10.0 + uTime * 0.5);
//             float alpha = smoothstep(0.5, 0.2, d + noise * 0.1);
            
//             vec3 color = vec3(0.5 + 0.5 * sin(uTime), 0.5 + 0.5 * cos(uTime * 0.7), 1.0);
//             color += noise * 0.1;
            
//             gl_FragColor = vec4(color, alpha * 0.7);
//           }
//         `}
//         vertexShader={`
//           void main() {
//             gl_Position = vec4(position, 1.0);
//           }
//         `}
//         uniforms={{
//           uTime: { value: 0 },
//           uResolution: { value: new Vector2() },
//         }}
//         transparent={true}
//       />
//     </mesh>
//   )
// }

// const AuraEffect = () => {
//   return (
//     <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
//       <Canvas>
//         <AuraShader />
//       </Canvas>
//     </div>
//   )
// }

// export default AuraEffect

