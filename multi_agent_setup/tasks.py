from crewai import Task

class IOTGatewayTasks:
    def architecture_planning_task(self, agent, feature_description):
        return Task(
            description=f'Analyze the following feature request: "{feature_description}". Break it down into technical requirements respecting the Hexagonal Architecture (Domain, Application, Infrastructure layers). Write a detailed implementation plan.',
            expected_output='A Markdown document (`implementation_plan.md`) describing the architecture, layer responsibilities, API endpoints, and data models.',
            agent=agent
        )

    def backend_development_task(self, agent, plan_document):
        return Task(
            description=f'Based on the implementation plan:\n\n{plan_document}\n\nDevelop the Backend Python code (FastAPI + SQLAlchemy) implementing the new feature. Ensure NO database models are imported into the Domain layer.',
            expected_output='Complete Python source code for the backend components, structured into Domain, Use Cases, Services, and Repositories.',
            agent=agent
        )

    def frontend_development_task(self, agent, plan_document):
        return Task(
            description=f'Based on the implementation plan:\n\n{plan_document}\n\nDevelop the Frontend React/TypeScript code. Use Zustand for UI state and TanStack Query for remote state.',
            expected_output='Complete React component code, custom hooks, and API client integration functions.',
            agent=agent
        )

    def testing_task(self, agent, feature_description):
        return Task(
            description=f'Review the code generated for: "{feature_description}". Define unit tests for the backend (Pytest) and frontend (Jest/Playwright) to guarantee behavior.',
            expected_output='A suite of test cases and testing instructions for the developer team.',
            agent=agent
        )
