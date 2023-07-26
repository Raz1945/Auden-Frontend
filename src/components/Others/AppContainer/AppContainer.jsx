import './styles.css'

const AppContainer = ({ children }) => {
  return (
    <div className="appContainer bg-gradient">
      {children}
    </div>
  );
}

export default AppContainer;