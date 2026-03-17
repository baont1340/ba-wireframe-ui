<section class="max-w-7xl mx-auto px-6 py-12">
  <div class="mb-6 flex justify-between items-end">
    <div>
      <h2 class="text-2xl">Data Management</h2>
      <p class="text-slate-500">Overview of all current records in the system.</p>
    </div>
    <button class="wf-button">Add New Record</button>
  </div>
  <div class="wf-border wf-bg overflow-x-auto">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b-2 border-slate-900 bg-slate-50">
          <th class="p-4 font-bold">ID</th>
          <th class="p-4 font-bold">Name</th>
          <th class="p-4 font-bold">Status</th>
          <th class="p-4 font-bold">Date Created</th>
          <th class="p-4 font-bold">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr>
          <td class="p-4">#001</td>
          <td class="p-4 font-medium">Record Alpha</td>
          <td class="p-4"><span class="px-2 py-1 wf-border text-xs rounded uppercase font-bold">Active</span></td>
          <td class="p-4 text-slate-500 italic">2024-03-01</td>
          <td class="p-4"><button class="text-blue-600 hover:underline">Edit</button></td>
        </tr>
        <tr>
          <td class="p-4">#002</td>
          <td class="p-4 font-medium">Record Beta</td>
          <td class="p-4"><span class="px-2 py-1 border border-slate-300 text-xs rounded uppercase font-bold text-slate-400">Pending</span></td>
          <td class="p-4 text-slate-500 italic">2024-02-28</td>
          <td class="p-4"><button class="text-blue-600 hover:underline">Edit</button></td>
        </tr>
        <tr>
          <td class="p-4">#003</td>
          <td class="p-4 font-medium">Record Gamma</td>
          <td class="p-4"><span class="px-2 py-1 wf-border text-xs rounded uppercase font-bold">Active</span></td>
          <td class="p-4 text-slate-500 italic">2024-02-15</td>
          <td class="p-4"><button class="text-blue-600 hover:underline">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
