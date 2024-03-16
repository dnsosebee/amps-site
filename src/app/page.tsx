import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6 lg:py-8 prose">
        <h1>Agent Meta-Programming System Runtime</h1>
        <Image
          src="/escher-drawing-hands.webp"
          alt="Escher's Drawing Hands"
          className="float-right m-5"
          width="200"
          height="200"
        />
        <p>
          Amps is a research project to develop a language and runtime for meta-self-improving AI
          agents. Unlike many existing agent architectures, Amps agents operate in a{" "}
          <a href="https://en.wikipedia.org/wiki/Reflective_programming">
            reflective programming environment
          </a>{" "}
          which allows them to systematically understand and modify their own behavior systems at
          any level of abstraction.
        </p>

        <p>
          This project is led by <a href="https://danielsosebee.com">Daniel Sosebee</a> and builds
          on the concept of human programming as described and developed in{" "}
          <a href="https://a.methodable.com">Methodable</a>. For questions or ideas, please{" "}
          <a href="mailto:daniel@harmonic.so">reach out via email</a>.
        </p>

        <h3>Agenda</h3>
        <ol>
          <li>
            Initial research - review existing literature on AI agents, planning systems, and human
            executive functioning.
          </li>
          <li>
            Problem identification - collect problems that will serve as a realistic test of the
            efficacy of autonomous AI agents.
          </li>
          <li>
            Human trial recording - record a human (mysel) solving the problems identified in step 2
            out loud, on video and in screen recording.
          </li>
          <li>
            Pseudocode development - Write pseudocode programs based on human trial data to
            symbolically describe the human perceptions, thoughts, and actions.
          </li>
          <li>
            Language spec development - Inspired by the human pseudocode, write a simple language
            spec for the Amps language.
          </li>
          <li>
            Initial Python library development - develop a Python library that implements the Amps
            language.
          </li>
          <li>
            Iterative system improvement - execute test runs against the problem list and record
            success metrics. Use the results to iteratively improve the system and reach a v1
            language spec.
          </li>
          <li>
            Fine-tuning data collection - collect a dataset of Amps contexts and correct outputs.
          </li>
          <li>
            LLM fine-tuning - fine-tune an open-source language model on the dataset in order to
            better generate Amps commands.
          </li>
          <li>
            Full implementation and evaluation - implement the full Amps runtime and evaluate it on
            the problem list.
          </li>
          <li>Documentation - write up the results and publish online.</li>
        </ol>
      </main>
    </>
  );
}
