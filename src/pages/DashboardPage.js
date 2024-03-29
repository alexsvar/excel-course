import {Page} from '@core/page/Page'
import {$} from '@core/dom'
import {createRecordsTable} from '@/shared/dashboard.functions'

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'dashboard').html(`
      <div class="dashboard__header">
          <h1>Excel Dashboard</h1>
      </div>
        
      <div class="dashboard__new">
          <div class="dashboard__view">
              <a class="dashboard__create" href="#excel/${now}">
                  New <br> Table
              </a>
          </div>
      </div>
        
      <div class="dashboard__table dashboard__view">
          ${createRecordsTable()}
      </div>
    `)
  }
}
