import os
from crewai import Agent
from langchain_openai import ChatOpenAI

# Setup the LLM, here using OpenAI's model. Make sure OPENAI_API_KEY is in your environment or .env file.
# You can also customize this to use Anthropic or a local LLM.
llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

class IOTGatewayAgents:
    def manager_agent(self):
        return Agent(
            role='System Architect & Product Manager',
            goal='Orchestrate the development of the IoT Gateway Management System, ensure Clean Architecture, and delegate tasks effectively.',
            backstory='You are a seasoned System Architect expert in Hexagonal Architecture. You make high-level decisions, review code for standards compliance, and manage the team of developers. You strictly enforce that Inner layers NEVER depend on outer layers.',
            verbose=True,
            allow_delegation=True,
            llm=llm
        )

    def backend_agent(self):
        return Agent(
            role='Backend Python Developer',
            goal='Implement robust backend services using FastAPI, SQLAlchemy, and Clean Architecture principles.',
            backstory='You are a Senior Python Developer who strictly separates Domain, Application, and Infrastructure layers. You excel at writing REST APIs and working with protocols like Modbus. You use Black and Ruff for linting.',
            verbose=True,
            allow_delegation=False,
            llm=llm
        )

    def frontend_agent(self):
        return Agent(
            role='Frontend React Developer',
            goal='Build responsive and functional user interfaces using React, TypeScript, and TailwindCSS.',
            backstory='You are a Frontend Web Expert. You specialize in Zustand for state management and React Query for API integration. You refuse to duplicate state and write strict TypeScript using Zod for form validation.',
            verbose=True,
            allow_delegation=False,
            llm=llm
        )

    def qa_agent(self):
        return Agent(
            role='QA Strategy Engineer',
            goal='Write and define unit testing and end-to-end testing strategies for both Backend and Frontend.',
            backstory='You are a rigorous Test Engineer. You write Pytest for Python and Jest/Playwright for TS/React, ensuring at least 80% coverage.',
            verbose=True,
            allow_delegation=False,
            llm=llm
        )
