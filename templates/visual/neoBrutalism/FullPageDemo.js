// Neo-Brutalism 完整页面預覽
export const fullPageHTML = `
      <div class="min-full-page" style="background: #f5f5f5; min-height: 100vh; font-family: 'Arial', sans-serif;">

        <!-- Navigation Bar -->
        <nav class="neo-brutal-nav" style="background: white; border-bottom: 6px solid black; padding: 1rem 2rem; position: sticky; top: 0; z-index: 100; box-shadow: 0 8px 0 black;">
          <div style="max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
            <!-- Logo -->
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ef4444, #ec4899); border: 4px solid black; transform: rotate(-3deg); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; font-weight: 900; color: white;">N</span>
              </div>
              <span style="font-size: 24px; font-weight: 900; color: black;">NEO<span style="color: #ef4444;">BRUTAL</span></span>
            </div>

            <!-- Main Nav -->
            <div style="display: flex; gap: 2rem; align-items: center;">
              <a href="javascript:void(0)" style="font-weight: 700; color: black; text-decoration: none; padding: 0.5rem 1rem; border: 3px solid transparent; transition: all 0.2s;">Dashboard</a>
              <a href="javascript:void(0)" style="font-weight: 700; color: #666; text-decoration: none; padding: 0.5rem 1rem; border: 3px solid transparent; transition: all 0.2s;">Projects</a>
              <a href="javascript:void(0)" style="font-weight: 700; color: #666; text-decoration: none; padding: 0.5rem 1rem; border: 3px solid transparent; transition: all 0.2s;">Team</a>
              <a href="javascript:void(0)" style="font-weight: 700; color: #666; text-decoration: none; padding: 0.5rem 1rem; border: 3px solid transparent; transition: all 0.2s;">Settings</a>
            </div>

            <!-- Right Actions -->
            <div style="display: flex; gap: 1rem; align-items: center;">
              <!-- Search -->
              <input type="text" placeholder="Search..." style="padding: 0.75rem 1rem; border: 4px solid black; background: white; font-weight: 600; width: 200px; box-shadow: 4px 4px 0 black;">

              <!-- Notification Badge -->
              <div style="position: relative; cursor: pointer;">
                <div style="width: 45px; height: 45px; background: #fbbf24; border: 4px solid black; display: flex; align-items: center; justify-content: center; transform: rotate(5deg); box-shadow: 4px 4px 0 black;">
                  <span style="font-size: 20px;">🔔</span>
                </div>
                <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 900; border: 3px solid black;">5</span>
              </div>

              <!-- User Avatar -->
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: 4px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 18px; box-shadow: 4px 4px 0 black; transform: rotate(-5deg);">
                JD
              </div>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section style="background: linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%); padding: 4rem 2rem; border-bottom: 6px solid black; position: relative;">
          <div style="max-width: 1400px; margin: 0 auto;">
            <div style="transform: rotate(-2deg); display: inline-block;">
              <h1 style="font-size: 72px; font-weight: 900; color: black; text-shadow: 6px 6px 0 white, 12px 12px 0 black; margin: 0; line-height: 1;">
                WELCOME BACK!
              </h1>
            </div>
            <p style="font-size: 24px; font-weight: 700; color: black; margin-top: 1.5rem; max-width: 600px;">
              Your dashboard is looking BRUTAL today! 🔥
            </p>
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
              <button class="neo-brutal-btn" style="padding: 1rem 2rem; background: black; color: white; border: 4px solid black; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 6px 6px 0 white; transform: rotate(-2deg); transition: all 0.2s;">
                START NEW PROJECT
              </button>
              <button class="neo-brutal-btn-secondary" style="padding: 1rem 2rem; background: white; color: black; border: 4px solid black; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 6px 6px 0 black; transform: rotate(2deg); transition: all 0.2s;">
                VIEW ANALYTICS
              </button>
            </div>
          </div>
        </section>

        <!-- Stats Grid -->
        <section style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">

            <!-- Stat Card 1 -->
            <div class="neo-brutal-card" style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 8px 8px 0 black; transform: rotate(-1deg); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                  <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: 4px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 1rem;">
                    📊
                  </div>
                  <h3 style="font-size: 14px; font-weight: 700; color: #666; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Total Projects</h3>
                  <p style="font-size: 42px; font-weight: 900; color: black; margin: 0.5rem 0;">247</p>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: #10b981; font-weight: 900; font-size: 16px;">↑ 12%</span>
                    <span style="color: #666; font-size: 14px; font-weight: 600;">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stat Card 2 -->
            <div class="neo-brutal-card" style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 8px 8px 0 black; transform: rotate(1deg); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                  <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981, #14b8a6); border: 4px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 1rem;">
                    👥
                  </div>
                  <h3 style="font-size: 14px; font-weight: 700; color: #666; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Team Members</h3>
                  <p style="font-size: 42px; font-weight: 900; color: black; margin: 0.5rem 0;">48</p>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: #10b981; font-weight: 900; font-size: 16px;">↑ 8%</span>
                    <span style="color: #666; font-size: 14px; font-weight: 600;">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stat Card 3 -->
            <div class="neo-brutal-card" style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 8px 8px 0 black; transform: rotate(-1.5deg); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                  <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f59e0b, #ef4444); border: 4px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 1rem;">
                    ⏱️
                  </div>
                  <h3 style="font-size: 14px; font-weight: 700; color: #666; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Hours Logged</h3>
                  <p style="font-size: 42px; font-weight: 900; color: black; margin: 0.5rem 0;">1,842</p>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: #ef4444; font-weight: 900; font-size: 16px;">↓ 3%</span>
                    <span style="color: #666; font-size: 14px; font-weight: 600;">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stat Card 4 -->
            <div class="neo-brutal-card" style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 8px 8px 0 black; transform: rotate(1.5deg); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                  <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ec4899, #d946ef); border: 4px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 1rem;">
                    💰
                  </div>
                  <h3 style="font-size: 14px; font-weight: 700; color: #666; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Revenue</h3>
                  <p style="font-size: 42px; font-weight: 900; color: black; margin: 0.5rem 0;">$89K</p>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: #10b981; font-weight: 900; font-size: 16px;">↑ 24%</span>
                    <span style="color: #666; font-size: 14px; font-weight: 600;">vs last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Content Area - Projects & Activity -->
        <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 3rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

            <!-- Recent Projects -->
            <div style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 10px 10px 0 black; transform: rotate(-0.5deg);">
              <h2 style="font-size: 28px; font-weight: 900; margin: 0 0 2rem 0; color: black; border-bottom: 4px solid black; padding-bottom: 1rem;">
                RECENT PROJECTS
              </h2>

              <!-- Project Item 1 -->
              <div style="padding: 1.5rem; border: 4px solid black; margin-bottom: 1rem; background: #fef3c7; box-shadow: 4px 4px 0 black;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #fbbf24, #f97316); border: 3px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    🚀
                  </div>
                  <div style="flex: 1;">
                    <h3 style="font-size: 18px; font-weight: 900; margin: 0; color: black;">Website Redesign</h3>
                    <p style="font-size: 14px; color: #666; margin: 0.25rem 0 0 0; font-weight: 600;">Client: Acme Corp</p>
                  </div>
                  <div style="padding: 0.5rem 1rem; background: #10b981; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; transform: rotate(-2deg);">
                    IN PROGRESS
                  </div>
                </div>
                <div style="background: #e5e7eb; border: 3px solid black; height: 12px; position: relative; overflow: hidden;">
                  <div style="background: #10b981; height: 100%; width: 75%; border-right: 3px solid black;"></div>
                </div>
                <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700; font-size: 14px;">
                  <span>75% Complete</span>
                  <span>Due: Dec 30</span>
                </div>
              </div>

              <!-- Project Item 2 -->
              <div style="padding: 1.5rem; border: 4px solid black; margin-bottom: 1rem; background: #dbeafe; box-shadow: 4px 4px 0 black;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #3b82f6, #6366f1); border: 3px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    📱
                  </div>
                  <div style="flex: 1;">
                    <h3 style="font-size: 18px; font-weight: 900; margin: 0; color: black;">Mobile App</h3>
                    <p style="font-size: 14px; color: #666; margin: 0.25rem 0 0 0; font-weight: 600;">Client: TechStart</p>
                  </div>
                  <div style="padding: 0.5rem 1rem; background: #22c55e; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; transform: rotate(2deg);">
                    COMPLETED
                  </div>
                </div>
                <div style="background: #e5e7eb; border: 3px solid black; height: 12px; position: relative; overflow: hidden;">
                  <div style="background: #22c55e; height: 100%; width: 100%;"></div>
                </div>
                <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700; font-size: 14px;">
                  <span>100% Complete</span>
                  <span>Finished: Dec 15</span>
                </div>
              </div>

              <!-- Project Item 3 -->
              <div style="padding: 1.5rem; border: 4px solid black; background: #fce7f3; box-shadow: 4px 4px 0 black;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ec4899, #d946ef); border: 3px solid black; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    🎨
                  </div>
                  <div style="flex: 1;">
                    <h3 style="font-size: 18px; font-weight: 900; margin: 0; color: black;">Brand Identity</h3>
                    <p style="font-size: 14px; color: #666; margin: 0.25rem 0 0 0; font-weight: 600;">Client: Creative Studio</p>
                  </div>
                  <div style="padding: 0.5rem 1rem; background: #f97316; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; transform: rotate(-3deg);">
                    PLANNING
                  </div>
                </div>
                <div style="background: #e5e7eb; border: 3px solid black; height: 12px; position: relative; overflow: hidden;">
                  <div style="background: #f97316; height: 100%; width: 25%; border-right: 3px solid black;"></div>
                </div>
                <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700; font-size: 14px;">
                  <span>25% Complete</span>
                  <span>Due: Jan 15</span>
                </div>
              </div>
            </div>

            <!-- Team Activity Timeline -->
            <div style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 10px 10px 0 black; transform: rotate(0.5deg);">
              <h2 style="font-size: 28px; font-weight: 900; margin: 0 0 2rem 0; color: black; border-bottom: 4px solid black; padding-bottom: 1rem;">
                TEAM ACTIVITY
              </h2>

              <!-- Timeline Item 1 -->
              <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: 4px solid black; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 16px;">
                  JD
                </div>
                <div style="flex: 1; background: #f3f4f6; border: 3px solid black; padding: 1rem; box-shadow: 3px 3px 0 black;">
                  <div style="font-weight: 900; font-size: 16px; color: black; margin-bottom: 0.25rem;">John Doe</div>
                  <div style="font-weight: 600; color: #666; font-size: 14px; margin-bottom: 0.5rem;">Completed "Website Redesign" mockups</div>
                  <div style="font-weight: 700; color: #999; font-size: 12px;">2 hours ago</div>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ec4899, #d946ef); border: 4px solid black; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 16px;">
                  SM
                </div>
                <div style="flex: 1; background: #f3f4f6; border: 3px solid black; padding: 1rem; box-shadow: 3px 3px 0 black;">
                  <div style="font-weight: 900; font-size: 16px; color: black; margin-bottom: 0.25rem;">Sarah Miller</div>
                  <div style="font-weight: 600; color: #666; font-size: 14px; margin-bottom: 0.5rem;">Started new project "E-commerce Platform"</div>
                  <div style="font-weight: 700; color: #999; font-size: 12px;">5 hours ago</div>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #10b981, #14b8a6); border: 4px solid black; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 16px;">
                  MJ
                </div>
                <div style="flex: 1; background: #f3f4f6; border: 3px solid black; padding: 1rem; box-shadow: 3px 3px 0 black;">
                  <div style="font-weight: 900; font-size: 16px; color: black; margin-bottom: 0.25rem;">Mike Johnson</div>
                  <div style="font-weight: 600; color: #666; font-size: 14px; margin-bottom: 0.5rem;">Updated "Mobile App" documentation</div>
                  <div style="font-weight: 700; color: #999; font-size: 12px;">1 day ago</div>
                </div>
              </div>

              <!-- Timeline Item 4 -->
              <div style="display: flex; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #f59e0b, #ef4444); border: 4px solid black; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; font-size: 16px;">
                  AW
                </div>
                <div style="flex: 1; background: #f3f4f6; border: 3px solid black; padding: 1rem; box-shadow: 3px 3px 0 black;">
                  <div style="font-weight: 900; font-size: 16px; color: black; margin-bottom: 0.25rem;">Anna White</div>
                  <div style="font-weight: 600; color: #666; font-size: 14px; margin-bottom: 0.5rem;">Submitted design review for "Brand Identity"</div>
                  <div style="font-weight: 700; color: #999; font-size: 12px;">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Form Components Section -->
        <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 3rem;">
          <div style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 10px 10px 0 black; transform: rotate(-0.3deg);">
            <h2 style="font-size: 28px; font-weight: 900; margin: 0 0 2rem 0; color: black; border-bottom: 4px solid black; padding-bottom: 1rem;">
              QUICK ACTIONS FORM
            </h2>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
              <!-- Left Column -->
              <div style="space-y: 1.5rem;">
                <!-- Text Input -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; font-weight: 900; font-size: 14px; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Project Name</label>
                  <input type="text" placeholder="Enter project name..." style="width: 100%; padding: 1rem; border: 4px solid black; background: white; font-weight: 600; font-size: 16px; box-shadow: 4px 4px 0 black;">
                </div>

                <!-- Select Dropdown -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; font-weight: 900; font-size: 14px; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Category</label>
                  <select style="width: 100%; padding: 1rem; border: 4px solid black; background: white; font-weight: 600; font-size: 16px; box-shadow: 4px 4px 0 black;">
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>Other</option>
                  </select>
                </div>

                <!-- Checkboxes -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; font-weight: 900; font-size: 14px; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Features</label>
                  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="checkbox" style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">Enable notifications</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="checkbox" checked style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">Public visibility</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="checkbox" style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">Allow collaboration</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <!-- Date Picker -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; font-weight: 900; font-size: 14px; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Due Date</label>
                  <input type="date" style="width: 100%; padding: 1rem; border: 4px solid black; background: white; font-weight: 600; font-size: 16px; box-shadow: 4px 4px 0 black;">
                </div>

                <!-- Radio Buttons -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; font-weight: 900; font-size: 14px; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Priority</label>
                  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="radio" name="priority" style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">🟢 Low</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="radio" name="priority" checked style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">🟡 Medium</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                      <input type="radio" name="priority" style="width: 24px; height: 24px; border: 3px solid black; cursor: pointer;">
                      <span style="font-weight: 600; font-size: 16px;">🔴 High</span>
                    </label>
                  </div>
                </div>

                <!-- Toggle Switch -->
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                    <span style="font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Urgent Project</span>
                    <div style="width: 60px; height: 32px; background: #10b981; border: 4px solid black; position: relative; cursor: pointer; box-shadow: 3px 3px 0 black;">
                      <div style="width: 24px; height: 24px; background: white; border: 3px solid black; position: absolute; right: 1px; top: 1px;"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div style="margin-top: 2rem; text-align: right;">
              <button style="padding: 1.25rem 3rem; background: linear-gradient(135deg, #ef4444, #ec4899); color: white; border: 5px solid black; font-weight: 900; font-size: 18px; cursor: pointer; box-shadow: 6px 6px 0 black; transform: rotate(-2deg); transition: all 0.3s;">
                CREATE PROJECT →
              </button>
            </div>
          </div>
        </section>

        <!-- Data Table Section -->
        <section style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 3rem;">
          <div style="background: white; border: 5px solid black; padding: 2rem; box-shadow: 10px 10px 0 black; transform: rotate(0.3deg); overflow-x: auto;">
            <h2 style="font-size: 28px; font-weight: 900; margin: 0 0 2rem 0; color: black; border-bottom: 4px solid black; padding-bottom: 1rem;">
              TEAM MEMBERS
            </h2>

            <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
              <thead>
                <tr style="background: black; color: white;">
                  <th style="padding: 1rem; text-align: left; font-weight: 900; font-size: 14px; border: 3px solid black;">USER</th>
                  <th style="padding: 1rem; text-align: left; font-weight: 900; font-size: 14px; border: 3px solid black;">EMAIL</th>
                  <th style="padding: 1rem; text-align: left; font-weight: 900; font-size: 14px; border: 3px solid black;">ROLE</th>
                  <th style="padding: 1rem; text-align: left; font-weight: 900; font-size: 14px; border: 3px solid black;">STATUS</th>
                  <th style="padding: 1rem; text-align: center; font-weight: 900; font-size: 14px; border: 3px solid black;">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <!-- Row 1 -->
                <tr style="background: #fef3c7; transition: all 0.2s;">
                  <td style="padding: 1rem; border: 3px solid black;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 14px;">JD</div>
                      <span style="font-weight: 700; font-size: 16px;">John Doe</span>
                    </div>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 600;">john.doe@example.com</td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 700; font-size: 14px;">Designer</td>
                  <td style="padding: 1rem; border: 3px solid black;">
                    <span style="padding: 0.5rem 1rem; background: #10b981; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; display: inline-block;">ACTIVE</span>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; text-align: center;">
                    <button style="padding: 0.5rem 1rem; background: white; border: 3px solid black; font-weight: 700; cursor: pointer; margin-right: 0.5rem; box-shadow: 2px 2px 0 black;">EDIT</button>
                    <button style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: 3px solid black; font-weight: 700; cursor: pointer; box-shadow: 2px 2px 0 black;">DELETE</button>
                  </td>
                </tr>

                <!-- Row 2 -->
                <tr style="background: #dbeafe; transition: all 0.2s;">
                  <td style="padding: 1rem; border: 3px solid black;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ec4899, #d946ef); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 14px;">SM</div>
                      <span style="font-weight: 700; font-size: 16px;">Sarah Miller</span>
                    </div>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 600;">sarah.m@example.com</td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 700; font-size: 14px;">Developer</td>
                  <td style="padding: 1rem; border: 3px solid black;">
                    <span style="padding: 0.5rem 1rem; background: #10b981; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; display: inline-block;">ACTIVE</span>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; text-align: center;">
                    <button style="padding: 0.5rem 1rem; background: white; border: 3px solid black; font-weight: 700; cursor: pointer; margin-right: 0.5rem; box-shadow: 2px 2px 0 black;">EDIT</button>
                    <button style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: 3px solid black; font-weight: 700; cursor: pointer; box-shadow: 2px 2px 0 black;">DELETE</button>
                  </td>
                </tr>

                <!-- Row 3 -->
                <tr style="background: #dcfce7; transition: all 0.2s;">
                  <td style="padding: 1rem; border: 3px solid black;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #14b8a6); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 14px;">MJ</div>
                      <span style="font-weight: 700; font-size: 16px;">Mike Johnson</span>
                    </div>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 600;">mike.j@example.com</td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 700; font-size: 14px;">Manager</td>
                  <td style="padding: 1rem; border: 3px solid black;">
                    <span style="padding: 0.5rem 1rem; background: #fbbf24; color: black; border: 3px solid black; font-weight: 900; font-size: 12px; display: inline-block;">AWAY</span>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; text-align: center;">
                    <button style="padding: 0.5rem 1rem; background: white; border: 3px solid black; font-weight: 700; cursor: pointer; margin-right: 0.5rem; box-shadow: 2px 2px 0 black;">EDIT</button>
                    <button style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: 3px solid black; font-weight: 700; cursor: pointer; box-shadow: 2px 2px 0 black;">DELETE</button>
                  </td>
                </tr>

                <!-- Row 4 -->
                <tr style="background: #fce7f3; transition: all 0.2s;">
                  <td style="padding: 1rem; border: 3px solid black;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #ef4444); border: 3px solid black; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 14px;">AW</div>
                      <span style="font-weight: 700; font-size: 16px;">Anna White</span>
                    </div>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 600;">anna.w@example.com</td>
                  <td style="padding: 1rem; border: 3px solid black; font-weight: 700; font-size: 14px;">Designer</td>
                  <td style="padding: 1rem; border: 3px solid black;">
                    <span style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: 3px solid black; font-weight: 900; font-size: 12px; display: inline-block;">INACTIVE</span>
                  </td>
                  <td style="padding: 1rem; border: 3px solid black; text-align: center;">
                    <button style="padding: 0.5rem 1rem; background: white; border: 3px solid black; font-weight: 700; cursor: pointer; margin-right: 0.5rem; box-shadow: 2px 2px 0 black;">EDIT</button>
                    <button style="padding: 0.5rem 1rem; background: #ef4444; color: white; border: 3px solid black; font-weight: 700; cursor: pointer; box-shadow: 2px 2px 0 black;">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Footer -->
        <footer style="background: black; color: white; border-top: 6px solid black; padding: 3rem 2rem; margin-top: 3rem;">
          <div style="max-width: 1400px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 2rem;">
              <!-- Brand -->
              <div>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ef4444, #ec4899); border: 4px solid white; transform: rotate(-3deg); display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 24px; font-weight: 900; color: white;">N</span>
                  </div>
                  <span style="font-size: 24px; font-weight: 900; color: white;">NEO<span style="color: #ef4444;">BRUTAL</span></span>
                </div>
                <p style="font-weight: 600; color: #d1d5db; line-height: 1.6;">Making interfaces BOLD and BRUTAL since 2024. 🚀</p>
              </div>

              <!-- Quick Links -->
              <div>
                <h3 style="font-weight: 900; font-size: 18px; margin-bottom: 1rem; border-bottom: 3px solid white; padding-bottom: 0.5rem; display: inline-block;">QUICK LINKS</h3>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <a href="javascript:void(0)" style="color: #d1d5db; text-decoration: none; font-weight: 600; transition: all 0.2s;">→ About Us</a>
                  <a href="javascript:void(0)" style="color: #d1d5db; text-decoration: none; font-weight: 600; transition: all 0.2s;">→ Contact</a>
                  <a href="javascript:void(0)" style="color: #d1d5db; text-decoration: none; font-weight: 600; transition: all 0.2s;">→ Privacy Policy</a>
                  <a href="javascript:void(0)" style="color: #d1d5db; text-decoration: none; font-weight: 600; transition: all 0.2s;">→ Terms of Service</a>
                </div>
              </div>

              <!-- Social Media -->
              <div>
                <h3 style="font-weight: 900; font-size: 18px; margin-bottom: 1rem; border-bottom: 3px solid white; padding-bottom: 0.5rem; display: inline-block;">FOLLOW US</h3>
                <div style="display: flex; gap: 1rem;">
                  <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #3b82f6; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 4px 4px 0 white; transform: rotate(-5deg); transition: all 0.2s;">
                    📘
                  </a>
                  <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #14b8a6; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 4px 4px 0 white; transform: rotate(5deg); transition: all 0.2s;">
                    🐦
                  </a>
                  <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ec4899; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 4px 4px 0 white; transform: rotate(-3deg); transition: all 0.2s;">
                    📷
                  </a>
                  <a href="javascript:void(0)" style="width: 50px; height: 50px; background: #ef4444; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 4px 4px 0 white; transform: rotate(3deg); transition: all 0.2s;">
                    ▶️
                  </a>
                </div>
              </div>
            </div>

            <!-- Copyright -->
            <div style="border-top: 3px solid white; padding-top: 2rem; text-align: center;">
              <p style="font-weight: 700; font-size: 16px; color: #d1d5db; margin: 0;">
                © 2024 NEOBRUTAL Dashboard. All rights reserved. Made with ❤️ and ☕
              </p>
            </div>
          </div>
        </footer>
      </div>

## 配色方案

配色方案：霓虹粉紫 (#FF71CE)、霓虹蓝 (#01CDFE)、霓虹紫 (#B967FF)、暗紫背景 (#2E1F47)


主色浅灰色 (#F5F5F5)、黑色边框 (#000000, 4-6px)、强调色红色 (#EF4444)、粉红色 (#EC4899)、琥珀色 (#FBBF24)、蓝紫色渐变 (#6366F1, #8B5CF6)
    `;

export const fullPageStyles = `
      /* Neo-Brutalism Complete Page Styles */

      /* Card Hover Effect */
      .neo-brutal-card:hover {
        transform: rotate(0deg) scale(1.05) !important;
        box-shadow: 12px 12px 0 black !important;
      }

      /* Button Hover Effects */
      .neo-brutal-btn:hover {
        transform: rotate(-2deg) scale(1.1) !important;
        box-shadow: 8px 8px 0 white, 12px 12px 0 black !important;
      }

      .neo-brutal-btn-secondary:hover {
        transform: rotate(2deg) scale(1.1) !important;
        box-shadow: 8px 8px 0 white, 12px 12px 0 black !important;
      }

      /* Nav Link Hover */
      .neo-brutal-nav a:hover {
        border: 3px solid black !important;
        background: #fbbf24 !important;
        transform: rotate(-2deg);
      }

      /* Input Focus Effects */
      input:focus, select:focus {
        outline: none;
        box-shadow: 6px 6px 0 #fbbf24 !important;
        transform: translateY(-2px);
      }

      /* Table Row Hover */
      tbody tr:hover {
        transform: scale(1.02);
        box-shadow: 4px 4px 0 black;
      }

      /* Footer Link Hover */
      footer a:hover {
        color: #fbbf24 !important;
        transform: translateX(5px);
      }

      /* Social Icon Hover */
      footer a[href]:hover {
        transform: rotate(0deg) scale(1.2) !important;
      }

      /* Smooth Transitions */
      * {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Responsive Design */
      @media (max-width: 1024px) {
        .neo-brutal-nav > div {
          flex-direction: column;
          gap: 1rem !important;
        }

        section > div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
        }

        table {
          font-size: 14px;
        }

        h1 {
          font-size: 48px !important;
        }
      }

      @media (max-width: 768px) {
        .neo-brutal-nav input {
          width: 100% !important;
        }

        h1 {
          font-size: 36px !important;
        }

        .neo-brutal-card {
          transform: rotate(0deg) !important;
        }

        table {
          font-size: 12px;
        }

        th, td {
          padding: 0.5rem !important;
        }

        button {
          padding: 0.5rem 1rem !important;
          font-size: 14px !important;
        }
      }
    `;
