export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
      <>
        {/* 오버레이 */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
            opacity: isSidebarOpen ? 1 : 0,
            visibility: isSidebarOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
  
        {/* 사이드바 */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '250px',
            height: '100%',
            backgroundColor: 'white',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 200,
          }}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>사이드바 메뉴</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>메뉴 항목 1</li>
              <li style={{ marginBottom: '10px' }}>메뉴 항목 2</li>
              <li style={{ marginBottom: '10px' }}>메뉴 항목 3</li>
            </ul>
          </div>
        </div>
      </>
    );
  }