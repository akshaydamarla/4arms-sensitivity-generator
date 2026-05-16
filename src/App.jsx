import Select from "react-select";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy } from "react-icons/fa";

import devices from "./data/devices";
import generateSensitivity from "./utils/generateSensitivity";

function App() {
  const [platform, setPlatform] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleBack = () => {
    if (result) {
      setResult(null);
      return;
    }

    if (sleeve) {
      setSleeve("");
      return;
    }

    if (platform === "apple" && variant) {
      setVariant("");
      return;
    }

    if (model) {
      setModel("");
      return;
    }

    if (brand) {
      setBrand("");
      return;
    }

    if (platform) {
      setPlatform("");
      return;
    }
  };

  const handleGenerate = () => {
    let selectedDevice;

    if (platform === "android") {
      selectedDevice = devices.android[brand][model];
    }

    if (platform === "apple") {
      selectedDevice =
        devices.apple.iPhone[model][variant];
    }

    const generated = generateSensitivity(
      selectedDevice,
      sleeve
    );

    setResult(generated);
  };

  const handleCopy = async () => {
    if (!result) return;

    const text = `
FF Sensitivity Settings

General: ${result.general}
Red Dot: ${result.redDot}
2X Scope: ${result.scope2x}
4X Scope: ${result.scope4x}
Sniper: ${result.sniper}
    `;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      background: "rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "8px",
      borderRadius: "18px",
      boxShadow: "none",
      minHeight: "60px",
      cursor: "text",
    }),

    menu: (provided) => ({
      ...provided,
      background: "#111",
      borderRadius: "18px",
      overflow: "hidden",
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused
        ? "#22c55e"
        : "#111",
      color: "white",
      padding: 14,
      cursor: "pointer",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),

    input: (provided) => ({
      ...provided,
      color: "white",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#888",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#22c55e",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            w-full
            max-w-md
            md:max-w-xl
            lg:max-w-2xl
            xl:max-w-4xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            shadow-2xl
            p-6
            lg:p-10
          "
        >

          {/* Header */}
          <div className="text-center mb-8">

            <h1 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              4ARMS Sensitivity Generator
            </h1>

            <p className="text-gray-400 text-sm lg:text-base">
              Generate pro Free Fire sensitivity settings for your device
            </p>
          </div>

          {/* Progress */}
          <div className="flex gap-2 mb-8">

            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`
                  h-2 flex-1 rounded-full transition-all duration-300
                  ${
                    (
                      (platform && step === 1) ||
                      (brand && step === 2) ||
                      (model && step === 3) ||
                      (sleeve && step === 4)
                    )
                      ? "bg-green-500"
                      : "bg-gray-800"
                  }
                `}
              />
            ))}
          </div>

          {/* Back Button */}
          {platform && (
            <button
              onClick={handleBack}
              className="mb-6 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              ← Back
            </button>
          )}

          <AnimatePresence mode="wait">

            {/* Platform Selection */}
            {!platform && (
              <motion.div
                key="platform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
              >

                <button
                  onClick={() => setPlatform("android")}
                  className="
                    p-8 rounded-2xl
                    bg-gradient-to-br from-green-500 to-green-700
                    hover:scale-105
                    transition-all duration-300
                    shadow-lg shadow-green-500/30
                    text-2xl font-bold
                  "
                >
                  Android
                </button>

                <button
                  onClick={() => setPlatform("apple")}
                  className="
                    p-8 rounded-2xl
                    bg-gradient-to-br from-gray-700 to-gray-900
                    hover:scale-105
                    transition-all duration-300
                    shadow-lg shadow-white/10
                    text-2xl font-bold
                  "
                >
                  Apple
                </button>

              </motion.div>
            )}

            {/* Android Flow */}
            {platform === "android" && (
              <motion.div
                key="android"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-5"
              >

                {/* Brand */}
                <select
                  className="
                    w-full p-4 rounded-2xl
                    bg-black/40 border border-white/10
                    focus:outline-none focus:border-green-500
                  "
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setModel("");
                    setSleeve("");
                    setResult(null);
                  }}
                >
                  <option>Select Brand</option>

                  {Object.keys(devices.android).map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>

                {/* Model */}
                {brand && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Select
                      styles={customSelectStyles}
                      placeholder="Search Device"
                      options={Object.keys(devices.android[brand]).map(
                        (m) => ({
                          value: m,
                          label: m,
                        })
                      )}
                      onChange={(selected) => {
                        setModel(selected.value);
                        setSleeve("");
                        setResult(null);
                      }}
                    />
                  </motion.div>
                )}

                {/* Sleeve */}
                {model && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                  >

                    <button
                      onClick={() => {
                        setSleeve("sleeves");
                        setResult(null);
                      }}
                      className={`
                        p-5 rounded-2xl transition-all duration-300
                        ${
                          sleeve === "sleeves"
                            ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                            : "bg-white/10 hover:bg-white/20"
                        }
                      `}
                    >
                      With Sleeves
                    </button>

                    <button
                      onClick={() => {
                        setSleeve("noSleeves");
                        setResult(null);
                      }}
                      className={`
                        p-5 rounded-2xl transition-all duration-300
                        ${
                          sleeve === "noSleeves"
                            ? "bg-red-500 shadow-lg shadow-red-500/30"
                            : "bg-white/10 hover:bg-white/20"
                        }
                      `}
                    >
                      Without Sleeves
                    </button>

                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Apple Flow */}
            {platform === "apple" && (
              <motion.div
                key="apple"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-5"
              >

                {/* Model */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Select
                    styles={customSelectStyles}
                    placeholder="Search iPhone"
                    options={Object.keys(devices.apple.iPhone).map(
                      (m) => ({
                        value: m,
                        label: m,
                      })
                    )}
                    onChange={(selected) => {
                      setModel(selected.value);
                      setVariant("");
                      setSleeve("");
                      setResult(null);
                    }}
                  />
                </motion.div>

                {/* Variant */}
                {model && (
                  <motion.select
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      w-full p-4 rounded-2xl
                      bg-black/40 border border-white/10
                      focus:outline-none focus:border-green-500
                    "
                    onChange={(e) => {
                      setVariant(e.target.value);
                      setSleeve("");
                      setResult(null);
                    }}
                  >
                    <option>Select Variant</option>

                    {Object.keys(devices.apple.iPhone[model]).map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </motion.select>
                )}

                {/* Sleeve */}
                {variant && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                  >

                    <button
                      onClick={() => {
                        setSleeve("sleeves");
                        setResult(null);
                      }}
                      className={`
                        p-5 rounded-2xl transition-all duration-300
                        ${
                          sleeve === "sleeves"
                            ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                            : "bg-white/10 hover:bg-white/20"
                        }
                      `}
                    >
                      With Sleeves
                    </button>

                    <button
                      onClick={() => {
                        setSleeve("noSleeves");
                        setResult(null);
                      }}
                      className={`
                        p-5 rounded-2xl transition-all duration-300
                        ${
                          sleeve === "noSleeves"
                            ? "bg-red-500 shadow-lg shadow-red-500/30"
                            : "bg-white/10 hover:bg-white/20"
                        }
                      `}
                    >
                      Without Sleeves
                    </button>

                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Generate */}
          {sleeve && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerate}
              className="
                w-full mt-8 py-5 rounded-2xl
                bg-gradient-to-r from-green-400 to-blue-500
                text-black font-black text-xl
                shadow-lg shadow-green-500/30
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              Generate Sensitivity
            </motion.button>
          )}

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mt-8 p-6 rounded-3xl
                bg-gradient-to-br from-green-500/10 to-blue-500/10
                border border-green-500/20
                backdrop-blur-xl
              "
            >

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-3xl font-black">
                  Your Sensitivity
                </h2>

                <button
                  onClick={handleCopy}
                  className="
                    p-3 rounded-xl
                    bg-white/10 hover:bg-white/20
                    transition
                  "
                >
                  <FaCopy />
                </button>
              </div>

              {copied && (
                <p className="text-green-400 mb-4">
                  Copied Successfully!
                </p>
              )}

              <div className="space-y-4">

                <div className="flex justify-between text-lg">
                  <span>General</span>
                  <span>{result.general}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Red Dot</span>
                  <span>{result.redDot}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>2X Scope</span>
                  <span>{result.scope2x}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>4X Scope</span>
                  <span>{result.scope4x}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Sniper</span>
                  <span>{result.sniper}</span>
                </div>

              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
}

export default App;